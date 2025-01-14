---
sidebar_position: 3
---
# kryo-l2-accessors.h

### ファイル情報

- パス: `linux-v6.12/include/soc/qcom/kryo-l2-accessors.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (c) 2018, The Linux Foundation. All rights reserved.
 */

#ifndef __SOC_ARCH_QCOM_KRYO_L2_ACCESSORS_H
#define __SOC_ARCH_QCOM_KRYO_L2_ACCESSORS_H

void kryo_l2_set_indirect_reg(u64 reg, u64 val);
u64 kryo_l2_get_indirect_reg(u64 reg);

#endif

```
