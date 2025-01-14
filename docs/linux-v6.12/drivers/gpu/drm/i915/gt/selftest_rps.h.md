---
sidebar_position: 152
---
# selftest_rps.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/i915/gt/selftest_rps.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Intel Corporation
 */

#ifndef SELFTEST_RPS_H
#define SELFTEST_RPS_H

int live_rps_control(void *arg);
int live_rps_clock_interval(void *arg);
int live_rps_frequency_cs(void *arg);
int live_rps_frequency_srm(void *arg);
int live_rps_power(void *arg);
int live_rps_interrupt(void *arg);
int live_rps_dynamic(void *arg);

#endif /* SELFTEST_RPS_H */

```
