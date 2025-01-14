---
sidebar_position: 2
---
# autoconf_helper.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/autoconf_helper.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0-only

#ifdef HAVE_GENHDR
# include "autoconf.h"
#else
# if defined(__i386) || defined(__x86_64) || defined(__s390x__) || defined(__aarch64__)
#  define CONFIG_HAVE_EFFICIENT_UNALIGNED_ACCESS 1
# endif
#endif

```
