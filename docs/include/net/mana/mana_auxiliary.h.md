---
sidebar_position: 4
---
# mana_auxiliary.h

### ファイル情報

- パス: `include/net/mana/mana_auxiliary.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright (c) 2022, Microsoft Corporation. */

#include "mana.h"
#include <linux/auxiliary_bus.h>

struct mana_adev {
	struct auxiliary_device adev;
	struct gdma_dev *mdev;
};

```
