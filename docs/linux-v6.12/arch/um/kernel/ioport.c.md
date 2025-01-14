---
sidebar_position: 10
---
# ioport.c

### ファイル情報

- パス: `linux-v6.12/arch/um/kernel/ioport.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2021 Intel Corporation
 * Author: Johannes Berg <johannes@sipsolutions.net>
 */
#include <asm/iomap.h>
#include <asm-generic/pci_iomap.h>

void __iomem *__pci_ioport_map(struct pci_dev *dev, unsigned long port,
			       unsigned int nr)
{
	return NULL;
}

```
