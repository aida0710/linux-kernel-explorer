---
sidebar_position: 4
---
# cs-etm.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/arm/util/cs-etm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright(C) 2015 Linaro Limited. All rights reserved.
 * Author: Mathieu Poirier <mathieu.poirier@linaro.org>
 */

#ifndef INCLUDE__PERF_CS_ETM_H__
#define INCLUDE__PERF_CS_ETM_H__

struct auxtrace_record *cs_etm_record_init(int *err);

#endif

```
