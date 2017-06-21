<!-- Create a toolbar for claw_editor.

@author Joseph Fehrman, Megan Fehrman
@since 06/20/2017
-->

<claw_toolbar>
  <div id="toolbar" class="row">
    <span each="{groups}" class="toolbar-group col s4 m3 l2">
      <button each="{buttons}" class="toolbar-buttons waves-effect waves-light btn-small" onclick="{click}"><i class="{icon}" /></button>
    </span>
  </div>

  <script>
    groups = opts.groups;
    console.log("groups: ", groups);
  </script>

  <style>
    div#toolbar toolbar-group{
      border-color: #ff5252;
      border-size: 1px;
      padding:2px;
    }

    div#toolbar{
      background-color: #f48fb1;
      width:100%
    }
  </style>

</claw_toolbar>
