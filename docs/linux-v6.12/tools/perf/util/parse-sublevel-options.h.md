---
sidebar_position: 209
---
# parse-sublevel-options.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/parse-sublevel-options.h`

### コンテンツ

```h
#ifndef _PERF_PARSE_SUBLEVEL_OPTIONS_H
#define _PERF_PARSE_SUBLEVEL_OPTIONS_H

struct sublevel_option {
	const char *name;
	int *value_ptr;
};

int perf_parse_sublevel_options(const char *str, struct sublevel_option *opts);

#endif

```
