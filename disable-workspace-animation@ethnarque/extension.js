import * as WorkspaceAnimation from "resource:///org/gnome/shell/ui/workspaceAnimation.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

export default class DisableWorkspaceAnimation extends Extension {
  constructor(metadata) {
    super(metadata);

    this._prevAnimateSwitch =
      WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch;
  }

  enable() {
    WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch =
      function (_from, _to, _direction, onComplete) {
        onComplete();
      };
  }

  disable() {
    WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch =
      this._prevAnimateSwitch;
  }
}
