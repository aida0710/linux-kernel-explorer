---
sidebar_position: 38
---
# linkage.h

### ファイル情報

- パス: `linux-v6.12/tools/include/linux/linkage.h`

### コンテンツ

```h
#ifndef _TOOLS_INCLUDE_LINUX_LINKAGE_H
#define _TOOLS_INCLUDE_LINUX_LINKAGE_H

#include <linux/export.h>

#define SYM_FUNC_START(x) .globl x; x:
#define SYM_FUNC_END(x)
#define SYM_DATA_START(x) .globl x; x:
#define SYM_DATA_START_LOCAL(x) x:
#define SYM_DATA_END(x)

#endif /* _TOOLS_INCLUDE_LINUX_LINKAGE_H */

```
