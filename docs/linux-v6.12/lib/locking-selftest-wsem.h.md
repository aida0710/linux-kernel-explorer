---
sidebar_position: 156
---
# locking-selftest-wsem.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-wsem.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef LOCK
#define LOCK		WSL

#undef UNLOCK
#define UNLOCK		WSU

#undef RLOCK
#define RLOCK		RSL

#undef WLOCK
#define WLOCK		WSL

#undef INIT
#define INIT		RWSI

```
