---
sidebar_position: 152
---
# locking-selftest-spin.h

### ファイル情報

- パス: `linux-v6.12/lib/locking-selftest-spin.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#undef LOCK
#define LOCK		L

#undef UNLOCK
#define UNLOCK		U

#undef RLOCK
#undef WLOCK

#undef INIT
#define INIT		SI

```
