---
sidebar_position: 143
---
# locking-selftest-mutex.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-mutex.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef LOCK
#define LOCK		ML

#undef UNLOCK
#define UNLOCK		MU

#undef RLOCK
#undef WLOCK

#undef INIT
#define INIT		MI

```
