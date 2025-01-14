---
sidebar_position: 411
---
# gcd.h

### ファイル情報

- パス: `linux-v6.12/include/linux/gcd.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _GCD_H
#define _GCD_H

#include <linux/compiler.h>

unsigned long gcd(unsigned long a, unsigned long b) __attribute_const__;

#endif /* _GCD_H */

```
