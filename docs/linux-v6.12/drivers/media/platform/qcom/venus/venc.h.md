---
sidebar_position: 35
---
# venc.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/qcom/venus/venc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2012-2016, The Linux Foundation. All rights reserved.
 * Copyright (C) 2017 Linaro Ltd.
 */
#ifndef __VENUS_VENC_H__
#define __VENUS_VENC_H__

struct venus_inst;

int venc_ctrl_init(struct venus_inst *inst);
void venc_ctrl_deinit(struct venus_inst *inst);

#endif

```
