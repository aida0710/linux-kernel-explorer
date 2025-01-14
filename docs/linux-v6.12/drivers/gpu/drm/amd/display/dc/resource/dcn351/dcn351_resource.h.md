---
sidebar_position: 2
---
# dcn351_resource.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/resource/dcn351/dcn351_resource.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/* Copyright 2024 Advanced Micro Devices, Inc. */

#ifndef _DCN351_RESOURCE_H_
#define _DCN351_RESOURCE_H_

#include "core_types.h"

extern struct _vcs_dpi_ip_params_st dcn3_51_ip;
extern struct _vcs_dpi_soc_bounding_box_st dcn3_51_soc;

#define TO_DCN351_RES_POOL(pool)\
	container_of(pool, struct dcn351_resource_pool, base)

struct dcn351_resource_pool {
	struct resource_pool base;
};

struct resource_pool *dcn351_create_resource_pool(
		const struct dc_init_data *init_data,
		struct dc *dc);

#endif /* _DCN351_RESOURCE_H_ */

```
