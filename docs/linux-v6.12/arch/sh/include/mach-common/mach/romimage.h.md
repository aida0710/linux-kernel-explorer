---
sidebar_position: 7
---
# romimage.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/mach-common/mach/romimage.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef __ASSEMBLY__

/* do nothing here by default */

#else /* __ASSEMBLY__ */

static inline void mmcif_update_progress(int nr)
{
}

#endif /* __ASSEMBLY__ */

```
