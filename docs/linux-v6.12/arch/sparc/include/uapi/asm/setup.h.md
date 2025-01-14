---
sidebar_position: 29
---
# setup.h

### ファイル情報

- パス: `linux-v6.12/arch/sparc/include/uapi/asm/setup.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
/*
 *	Just a place holder. 
 */

#ifndef _UAPI_SPARC_SETUP_H
#define _UAPI_SPARC_SETUP_H

#if defined(__sparc__) && defined(__arch64__)
# define COMMAND_LINE_SIZE 2048
#else
# define COMMAND_LINE_SIZE 256
#endif


#endif /* _UAPI_SPARC_SETUP_H */

```
