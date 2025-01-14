---
sidebar_position: 147
---
# locking-selftest-rsem.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-rsem.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef LOCK
#define LOCK		RSL

#undef UNLOCK
#define UNLOCK		RSU

#undef RLOCK
#define RLOCK		RSL

#undef WLOCK
#define WLOCK		WSL

#undef INIT
#define INIT		RWSI

```
