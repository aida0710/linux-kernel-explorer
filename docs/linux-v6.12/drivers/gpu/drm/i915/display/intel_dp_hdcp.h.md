---
sidebar_position: 126
---
# intel_dp_hdcp.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/display/intel_dp_hdcp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2021 Intel Corporation
 */

#ifndef __INTEL_DP_HDCP___
#define __INTEL_DP_HDCP___

struct intel_connector;
struct intel_digital_port;

int intel_dp_hdcp_init(struct intel_digital_port *dig_port,
		       struct intel_connector *intel_connector);

#endif /* __INTEL_DP_HDCP___ */

```
