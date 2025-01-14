---
sidebar_position: 13
---
# fwio.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/silabs/wfx/fwio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Firmware loading.
 *
 * Copyright (c) 2017-2019, Silicon Laboratories, Inc.
 * Copyright (c) 2010, ST-Ericsson
 */
#ifndef WFX_FWIO_H
#define WFX_FWIO_H

struct wfx_dev;

int wfx_init_device(struct wfx_dev *wdev);

#endif

```
