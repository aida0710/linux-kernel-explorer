---
sidebar_position: 2
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/bpf/resolve_btfids/Build`

### コンテンツ

```txt
hostprogs := resolve_btfids

resolve_btfids-y += main.o
resolve_btfids-y += rbtree.o
resolve_btfids-y += zalloc.o
resolve_btfids-y += string.o
resolve_btfids-y += ctype.o
resolve_btfids-y += str_error_r.o

$(OUTPUT)%.o: ../../lib/%.c FORCE
	$(call rule_mkdir)
	$(call if_changed_dep,host_cc_o_c)

```
