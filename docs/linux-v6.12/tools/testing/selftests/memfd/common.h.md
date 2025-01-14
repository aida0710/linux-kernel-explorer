---
sidebar_position: 3
---
# common.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/memfd/common.h`

### コンテンツ

```h
#ifndef COMMON_H_
#define COMMON_H_

extern int hugetlbfs_test;

unsigned long default_huge_page_size(void);
int sys_memfd_create(const char *name, unsigned int flags);

#endif

```
