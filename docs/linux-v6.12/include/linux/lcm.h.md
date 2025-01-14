---
sidebar_position: 670
---
# lcm.h

### ファイル情報

- パス: `linux-v6.12/include/linux/lcm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LCM_H
#define _LCM_H

#include <linux/compiler.h>

unsigned long lcm(unsigned long a, unsigned long b) __attribute_const__;
unsigned long lcm_not_zero(unsigned long a, unsigned long b) __attribute_const__;

#endif /* _LCM_H */

```
