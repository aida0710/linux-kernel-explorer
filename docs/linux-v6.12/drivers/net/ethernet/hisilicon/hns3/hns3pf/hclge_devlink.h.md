---
sidebar_position: 7
---
# hclge_devlink.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/hisilicon/hns3/hns3pf/hclge_devlink.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/* Copyright (c) 2021 Hisilicon Limited. */

#ifndef __HCLGE_DEVLINK_H
#define __HCLGE_DEVLINK_H

#include "hclge_main.h"

#define	HCLGE_DEVLINK_FW_SCC_LEN	32

struct hclge_devlink_priv {
	struct hclge_dev *hdev;
};

int hclge_devlink_init(struct hclge_dev *hdev);
void hclge_devlink_uninit(struct hclge_dev *hdev);
#endif

```
