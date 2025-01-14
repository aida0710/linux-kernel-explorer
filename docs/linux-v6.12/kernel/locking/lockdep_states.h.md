---
sidebar_position: 5
---
# lockdep_states.h

### ファイル情報

- パス: `linux-v6.12/kernel/locking/lockdep_states.h`

### コンテンツ

```h
/*
 * Lockdep states,
 *
 * please update XXX_LOCK_USAGE_STATES in include/linux/lockdep.h whenever
 * you add one, or come up with a nice dynamic solution.
 */
LOCKDEP_STATE(HARDIRQ)
LOCKDEP_STATE(SOFTIRQ)

```
