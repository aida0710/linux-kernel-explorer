---
sidebar_position: 207
---
# parse-regs-options.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/parse-regs-options.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PERF_PARSE_REGS_OPTIONS_H
#define _PERF_PARSE_REGS_OPTIONS_H 1
struct option;
int parse_user_regs(const struct option *opt, const char *str, int unset);
int parse_intr_regs(const struct option *opt, const char *str, int unset);
#endif /* _PERF_PARSE_REGS_OPTIONS_H */

```
