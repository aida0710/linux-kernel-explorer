---
sidebar_position: 3
---
# hclgevf_devlink.h

### ファイル情報

- パス: `drivers/net/ethernet/hisilicon/hns3/hns3vf/hclgevf_devlink.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/* Copyright (c) 2021 Hisilicon Limited. */

#ifndef __HCLGEVF_DEVLINK_H
#define __HCLGEVF_DEVLINK_H

#include "hclgevf_main.h"

struct hclgevf_devlink_priv {
	struct hclgevf_dev *hdev;
};

int hclgevf_devlink_init(struct hclgevf_dev *hdev);
void hclgevf_devlink_uninit(struct hclgevf_dev *hdev);
#endif

```
