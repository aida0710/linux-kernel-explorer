---
sidebar_position: 3
---
# hclge_dcb.h

### ファイル情報

- パス: `drivers/net/ethernet/hisilicon/hns3/hns3pf/hclge_dcb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
// Copyright (c) 2016-2017 Hisilicon Limited.

#ifndef __HCLGE_DCB_H__
#define __HCLGE_DCB_H__

#include "hclge_main.h"

#ifdef CONFIG_HNS3_DCB
void hclge_dcb_ops_set(struct hclge_dev *hdev);
#else
static inline void hclge_dcb_ops_set(struct hclge_dev *hdev) {}
#endif

#endif /* __HCLGE_DCB_H__ */

```
