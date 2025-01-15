---
sidebar_position: 17
---
# mtk_wed_ops.c

### ファイル情報

- パス: `drivers/net/ethernet/mediatek/mtk_wed_ops.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0-only
/* Copyright (C) 2020 Felix Fietkau <nbd@nbd.name> */

#include <linux/kernel.h>
#include <linux/soc/mediatek/mtk_wed.h>

const struct mtk_wed_ops __rcu *mtk_soc_wed_ops;
EXPORT_SYMBOL_GPL(mtk_soc_wed_ops);

```
