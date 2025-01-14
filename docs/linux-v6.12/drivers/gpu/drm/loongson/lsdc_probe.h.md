---
sidebar_position: 26
---
# lsdc_probe.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/loongson/lsdc_probe.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * Copyright (C) 2023 Loongson Technology Corporation Limited
 */

#ifndef __LSDC_PROBE_H__
#define __LSDC_PROBE_H__

/* Helpers for chip detection */
unsigned int loongson_cpu_get_prid(u8 *impl, u8 *rev);

#endif

```
