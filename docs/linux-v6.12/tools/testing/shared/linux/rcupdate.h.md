---
sidebar_position: 13
---
# rcupdate.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/shared/linux/rcupdate.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _RCUPDATE_H
#define _RCUPDATE_H

#include <urcu.h>

#define rcu_dereference_raw(p) rcu_dereference(p)
#define rcu_dereference_protected(p, cond) rcu_dereference(p)
#define rcu_dereference_check(p, cond) rcu_dereference(p)
#define RCU_INIT_POINTER(p, v)	do { (p) = (v); } while (0)

#endif

```
