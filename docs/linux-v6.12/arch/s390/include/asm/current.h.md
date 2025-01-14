---
sidebar_position: 40
---
# current.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/current.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 *  S390 version
 *    Copyright IBM Corp. 1999
 *    Author(s): Martin Schwidefsky (schwidefsky@de.ibm.com)
 *
 *  Derived from "include/asm-i386/current.h"
 */

#ifndef _S390_CURRENT_H
#define _S390_CURRENT_H

#include <asm/lowcore.h>

struct task_struct;

#define current ((struct task_struct *const)get_lowcore()->current_task)

#endif /* !(_S390_CURRENT_H) */

```
