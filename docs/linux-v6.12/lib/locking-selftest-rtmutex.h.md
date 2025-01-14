---
sidebar_position: 148
---
# locking-selftest-rtmutex.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-rtmutex.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef LOCK
#define LOCK		RTL

#undef UNLOCK
#define UNLOCK		RTU

#undef RLOCK
#undef WLOCK

#undef INIT
#define INIT		RTI

```
