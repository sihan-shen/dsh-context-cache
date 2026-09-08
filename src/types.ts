import type { ContextBlockV1 } from '@han_05/dsh-context'

export type CacheBoundaryV1 = {
  workspaceFingerprint: string
  snapshotId: string
  adapterId: string
  adapterVersion: string
  compilerPolicyVersion: string
  capabilityVersion: string
}

export type CacheLookupKeyV1 = CacheBoundaryV1 & {
  normalizedQuery: string
  dependencyHashes: readonly string[]
}

export type ContextCacheConfigV1 = {
  deploymentRoot: string
  maxEntries?: number
  maxBytes?: number
  lockTimeoutMs?: number
}

export type ContextCacheStoreApiV1 = {
  getBlock(blockId: string, boundary: CacheBoundaryV1): Promise<ContextBlockV1 | undefined>
  putBlock(block: ContextBlockV1, boundary: CacheBoundaryV1): Promise<void>
  getToolResult(key: string, boundary: CacheBoundaryV1): Promise<unknown | undefined>
  putToolResult(key: string, boundary: CacheBoundaryV1, value: unknown, maxBytes: number): Promise<void>
  getLookup(key: CacheLookupKeyV1): Promise<readonly string[] | undefined>
  putLookup(key: CacheLookupKeyV1, blockIds: readonly string[]): Promise<void>
  invalidateBySourceHashes(hashes: readonly string[]): Promise<void>
  close(): Promise<void>
}
