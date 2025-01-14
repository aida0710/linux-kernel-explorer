---
sidebar_position: 211
---
# path.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/path.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PERF_PATH_H
#define _PERF_PATH_H

#include <stddef.h>
#include <stdbool.h>

struct dirent;

int path__join(char *bf, size_t size, const char *path1, const char *path2);
int path__join3(char *bf, size_t size, const char *path1, const char *path2, const char *path3);

bool is_regular_file(const char *file);
bool is_directory(const char *base_path, const struct dirent *dent);
bool is_executable_file(const char *base_path, const struct dirent *dent);

#endif /* _PERF_PATH_H */

```
