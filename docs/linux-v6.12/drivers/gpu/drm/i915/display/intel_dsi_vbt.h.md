---
sidebar_position: 145
---
# intel_dsi_vbt.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dsi_vbt.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __INTEL_DSI_VBT_H__
#define __INTEL_DSI_VBT_H__

#include <linux/types.h>

enum mipi_seq;
struct intel_dsi;

bool intel_dsi_vbt_init(struct intel_dsi *intel_dsi, u16 panel_id);
void intel_dsi_vbt_gpio_init(struct intel_dsi *intel_dsi, bool panel_is_on);
void intel_dsi_vbt_exec_sequence(struct intel_dsi *intel_dsi,
				 enum mipi_seq seq_id);
void intel_dsi_log_params(struct intel_dsi *intel_dsi);

#endif /* __INTEL_DSI_VBT_H__ */

```
