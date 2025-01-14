---
sidebar_position: 9
---
# cacheinfo.h

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/kernel/cacheinfo.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _PPC_CACHEINFO_H
#define _PPC_CACHEINFO_H

/* These are just hooks for sysfs.c to use. */
extern void cacheinfo_cpu_online(unsigned int cpu_id);
extern void cacheinfo_cpu_offline(unsigned int cpu_id);

/* Allow migration/suspend to tear down and rebuild the hierarchy. */
extern void cacheinfo_teardown(void);
extern void cacheinfo_rebuild(void);

#endif /* _PPC_CACHEINFO_H */

```
