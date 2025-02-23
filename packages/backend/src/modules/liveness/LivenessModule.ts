import { Logger } from '@l2beat/backend-tools'
import { BigQueryClient, BigQuerySDKWrapper } from '@l2beat/shared'

import { Config } from '../../config'
import { Clock } from '../../core/Clock'
import { HourlyIndexer } from '../../core/liveness/HourlyIndexer'
import { LivenessClient } from '../../core/liveness/LivenessClient'
import { LivenessIndexer } from '../../core/liveness/LivenessIndexer'
import { IndexerStateRepository } from '../../peripherals/database/IndexerStateRepository'
import { LivenessConfigurationRepository } from '../../peripherals/database/LivenessConfigurationRepository'
import { LivenessRepository } from '../../peripherals/database/LivenessRepository'
import { Database } from '../../peripherals/database/shared/Database'
import { ApplicationModule } from '../ApplicationModule'

export function createLivenessModule(
  config: Config,
  logger: Logger,
  database: Database,
  clock: Clock,
): ApplicationModule | undefined {
  if (!config.liveness) {
    logger.info('Liveness module disabled')
    return
  }

  const indexerStateRepository = new IndexerStateRepository(database, logger)
  const livenessRepository = new LivenessRepository(database, logger)
  const livenessConfigurationRepository = new LivenessConfigurationRepository(
    database,
    logger,
  )

  const bigQueryWrapper = new BigQuerySDKWrapper({
    clientEmail: config.liveness.bigQuery.clientEmail,
    privateKey: config.liveness.bigQuery.privateKey,
    projectId: config.liveness.bigQuery.projectId,
  })
  const bigQueryClient = new BigQueryClient(bigQueryWrapper)
  const livenessClient = new LivenessClient(bigQueryClient)

  const hourlyIndexer = new HourlyIndexer(logger, clock)
  const liveness = new LivenessIndexer(
    logger,
    hourlyIndexer,
    config.projects,
    livenessClient,
    indexerStateRepository,
    livenessRepository,
    livenessConfigurationRepository,
    config.liveness.minTimestamp,
  )

  const start = async () => {
    await hourlyIndexer.start()
    await liveness.start()
  }

  return {
    start,
  }
}
