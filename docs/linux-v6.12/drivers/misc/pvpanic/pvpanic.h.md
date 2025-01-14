---
sidebar_position: 6
---
# pvpanic.h

### ファイル情報

- パス: `linux-v6.12/drivers/misc/pvpanic/pvpanic.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0+
/*
 *  Pvpanic Device Support
 *
 *  Copyright (C) 2021 Oracle.
 */

#ifndef PVPANIC_H_
#define PVPANIC_H_

#include <linux/compiler_types.h>

struct attribute_group;
struct device;

int devm_pvpanic_probe(struct device *dev, void __iomem *base);
extern const struct attribute_group *pvpanic_dev_groups[];

#endif /* PVPANIC_H_ */

```
