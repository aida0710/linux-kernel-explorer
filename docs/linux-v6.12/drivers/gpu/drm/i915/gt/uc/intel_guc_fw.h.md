---
sidebar_position: 24
---
# intel_guc_fw.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/uc/intel_guc_fw.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2017-2019 Intel Corporation
 */

#ifndef _INTEL_GUC_FW_H_
#define _INTEL_GUC_FW_H_

struct intel_guc;

int intel_guc_fw_upload(struct intel_guc *guc);

#endif

```
