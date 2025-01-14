---
sidebar_position: 136
---
# selftest_engine_heartbeat.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/selftest_engine_heartbeat.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef SELFTEST_ENGINE_HEARTBEAT_H
#define SELFTEST_ENGINE_HEARTBEAT_H

struct intel_engine_cs;

void st_engine_heartbeat_disable(struct intel_engine_cs *engine);
void st_engine_heartbeat_disable_no_pm(struct intel_engine_cs *engine);
void st_engine_heartbeat_enable(struct intel_engine_cs *engine);
void st_engine_heartbeat_enable_no_pm(struct intel_engine_cs *engine);

#endif /* SELFTEST_ENGINE_HEARTBEAT_H */

```
