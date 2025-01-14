---
sidebar_position: 57
---
# clockid.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/clockid.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __PERF_CLOCKID_H
#define __PERF_CLOCKID_H

struct option;
int parse_clockid(const struct option *opt, const char *str, int unset);

const char *clockid_name(clockid_t clk_id);

#endif

```
