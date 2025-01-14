---
sidebar_position: 420
---
# glob.h

### ファイル情報

- パス: `linux-v6.12/include/linux/glob.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_GLOB_H
#define _LINUX_GLOB_H

#include <linux/types.h>	/* For bool */
#include <linux/compiler.h>	/* For __pure */

bool __pure glob_match(char const *pat, char const *str);

#endif	/* _LINUX_GLOB_H */

```
