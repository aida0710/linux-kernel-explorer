---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/lib/api/Build`

### コンテンツ

```txt
libapi-y += fd/
libapi-y += fs/
libapi-y += cpu.o
libapi-y += debug.o
libapi-y += str_error_r.o

$(OUTPUT)str_error_r.o: ../str_error_r.c FORCE
	$(call rule_mkdir)
	$(call if_changed_dep,cc_o_c)

```
