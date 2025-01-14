---
sidebar_position: 155
---
# locking-selftest-wlock.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-wlock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef LOCK
#define LOCK		WL

#undef UNLOCK
#define UNLOCK		WU

#undef RLOCK
#define RLOCK		RL

#undef WLOCK
#define WLOCK		WL

#undef INIT
#define INIT		RWI

```
