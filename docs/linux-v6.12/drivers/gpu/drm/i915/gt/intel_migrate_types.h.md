---
sidebar_position: 91
---
# intel_migrate_types.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/intel_migrate_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef __INTEL_MIGRATE_TYPES__
#define __INTEL_MIGRATE_TYPES__

struct intel_context;

struct intel_migrate {
	struct intel_context *context;
};

#endif /* __INTEL_MIGRATE_TYPES__ */

```
