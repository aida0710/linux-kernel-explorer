---
sidebar_position: 11
---
# debug.h

### ファイル情報

- パス: `drivers/net/wireless/silabs/wfx/debug.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Debugfs interface.
 *
 * Copyright (c) 2017-2019, Silicon Laboratories, Inc.
 * Copyright (c) 2011, ST-Ericsson
 */
#ifndef WFX_DEBUG_H
#define WFX_DEBUG_H

struct wfx_dev;

int wfx_debug_init(struct wfx_dev *wdev);

const char *wfx_get_hif_name(unsigned long id);
const char *wfx_get_mib_name(unsigned long id);
const char *wfx_get_reg_name(unsigned long id);

#endif

```
