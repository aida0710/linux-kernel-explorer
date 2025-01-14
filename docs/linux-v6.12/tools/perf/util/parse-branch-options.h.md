---
sidebar_position: 201
---
# parse-branch-options.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/parse-branch-options.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PERF_PARSE_BRANCH_OPTIONS_H
#define _PERF_PARSE_BRANCH_OPTIONS_H 1
#include <stdint.h>
int parse_branch_stack(const struct option *opt, const char *str, int unset);
int parse_branch_str(const char *str, __u64 *mode);
#endif /* _PERF_PARSE_BRANCH_OPTIONS_H */

```
