---
sidebar_position: 8
---
# hclgevf_regs.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/hisilicon/hns3/hns3vf/hclgevf_regs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/* Copyright (c) 2023 Hisilicon Limited. */

#ifndef __HCLGEVF_REGS_H
#define __HCLGEVF_REGS_H
#include <linux/types.h>

struct hnae3_handle;

int hclgevf_get_regs_len(struct hnae3_handle *handle);
void hclgevf_get_regs(struct hnae3_handle *handle, u32 *version,
		      void *data);
#endif

```
