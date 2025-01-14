---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/objtool/arch/x86/Build`

### コンテンツ

```txt
objtool-y += special.o
objtool-y += decode.o
objtool-y += orc.o

inat_tables_script = ../arch/x86/tools/gen-insn-attr-x86.awk
inat_tables_maps = ../arch/x86/lib/x86-opcode-map.txt

$(OUTPUT)arch/x86/lib/inat-tables.c: $(inat_tables_script) $(inat_tables_maps)
	$(call rule_mkdir)
	$(Q)$(call echo-cmd,gen)$(AWK) -f $(inat_tables_script) $(inat_tables_maps) > $@

$(OUTPUT)arch/x86/decode.o: $(OUTPUT)arch/x86/lib/inat-tables.c

CFLAGS_decode.o += -I$(OUTPUT)arch/x86/lib

```
