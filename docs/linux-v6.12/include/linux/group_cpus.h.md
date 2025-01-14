---
sidebar_position: 427
---
# group_cpus.h

### ファイル情報

- パス: `linux-v6.12/include/linux/group_cpus.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2016 Thomas Gleixner.
 * Copyright (C) 2016-2017 Christoph Hellwig.
 */

#ifndef __LINUX_GROUP_CPUS_H
#define __LINUX_GROUP_CPUS_H
#include <linux/kernel.h>
#include <linux/cpu.h>

struct cpumask *group_cpus_evenly(unsigned int numgrps);

#endif

```
