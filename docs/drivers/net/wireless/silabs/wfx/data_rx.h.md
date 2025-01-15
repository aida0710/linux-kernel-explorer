---
sidebar_position: 7
---
# data_rx.h

### ファイル情報

- パス: `drivers/net/wireless/silabs/wfx/data_rx.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Data receiving implementation.
 *
 * Copyright (c) 2017-2020, Silicon Laboratories, Inc.
 * Copyright (c) 2010, ST-Ericsson
 */
#ifndef WFX_DATA_RX_H
#define WFX_DATA_RX_H

struct wfx_vif;
struct sk_buff;
struct wfx_hif_ind_rx;

void wfx_rx_cb(struct wfx_vif *wvif, const struct wfx_hif_ind_rx *arg, struct sk_buff *skb);

#endif

```
